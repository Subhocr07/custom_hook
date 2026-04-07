// UserTable.jsx

const UserTable = ({ users, page, setPage }) => {
  return (
    <div>
      <table>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        Prev
      </button>

      <span>{page}</span>

      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};

export default UserTable;
