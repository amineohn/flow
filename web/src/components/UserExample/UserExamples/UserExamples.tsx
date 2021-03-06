import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import swal from 'sweetalert';
import { QUERY } from 'src/components/UserExample/UserExamplesCell'

const DELETE_USER_EXAMPLE_MUTATION = gql`
  mutation DeleteUserExampleMutation($id: Int!) {
    deleteUserExample(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UserExamplesList = ({ userExamples }) => {
  const [deleteUserExample] = useMutation(DELETE_USER_EXAMPLE_MUTATION, {
    onCompleted: () => {
      toast.success('UserExample deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const Alert = ({ message, type, onClick }): any => (
    <div className={`alert alert-${type}`} role="alert">
      {message}
      <button type="button" className="close" onClick={onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
  const onDeleteClick = (id: number) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this UserExample!",
        icon: "warning",
        buttons: ["Cancel", "Delete"],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteUserExample({ variables: { id } })
          swal("Poof! Your UserExample has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your UserExample is safe!");
        }
      });
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userExamples.map((userExample) => (
            <tr key={userExample.id}>
              <td>{truncate(userExample.id)}</td>
              <td>{truncate(userExample.email)}</td>
              <td>{truncate(userExample.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userExample({ id: userExample.id })}
                    title={'Show userExample ' + userExample.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserExample({ id: userExample.id })}
                    title={'Edit userExample ' + userExample.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userExample ' + userExample.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userExample.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserExamplesList
