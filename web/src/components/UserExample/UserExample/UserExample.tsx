import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import swal from 'sweetalert';

const DELETE_USER_EXAMPLE_MUTATION = gql`
  mutation DeleteUserExampleMutation($id: Int!) {
    deleteUserExample(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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


const UserExample = ({ userExample }) => {
  const [deleteUserExample] = useMutation(DELETE_USER_EXAMPLE_MUTATION, {
    onCompleted: () => {
      toast.success('UserExample deleted')
      navigate(routes.userExamples())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">UserExample {userExample.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userExample.id}</td>
            </tr><tr>
              <th>Email</th>
              <td>{userExample.email}</td>
            </tr><tr>
              <th>Name</th>
              <td>{userExample.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserExample({ id: userExample.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userExample.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserExample
