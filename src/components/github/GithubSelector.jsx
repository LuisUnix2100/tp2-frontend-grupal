function GithubSelector({ users, selectedUser, onChange }) {
  return (
    <div className="github-selector">
      <label htmlFor="github-user">
        Elegí un integrante
      </label>

      <select
        id="github-user"
        value={selectedUser}
        onChange={(event) => onChange(event.target.value)}
      >
        {users.map((user) => (
          <option
            key={user.id}
            value={user.username}
          >
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GithubSelector;