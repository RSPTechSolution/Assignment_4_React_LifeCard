import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-extrabold text-[var(--text-primary)] mb-12 text-center">
        Meet Our Community
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-800 rounded-lg p-6 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gray-700 mb-5 mx-auto"></div>
                <div className="h-4 bg-gray-700 rounded w-32 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-24 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-40 mx-auto"></div>
              </div>
            ))
          : users.map((user) => (
              <Link key={user.uid} to={`/user/${user.uid}`}>
                <div className="user-card text-center">
                  <img
                    alt={`${user.full_name} profile picture`}
                    className="w-24 h-24 rounded-full mb-5 border-4 border-gray-700 mx-auto"
                    src={user.image}
                  />
                  <h3 className="text-xl font-bold text-[var(--text-plain)] mb-1">
                    {user.full_name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{user.role}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.address}</p>
                </div>
              </Link>
            ))}
      </div>
    </main>
  );
};

export default User;
