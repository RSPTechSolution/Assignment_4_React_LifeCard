import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const SkeletonLoader = () => (
  <div className="flex justify-center py-12">
    <div className="w-full max-w-5xl bg-gray-200 animate-pulse rounded-2xl p-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-10">
        <div className="h-36 w-36 sm:h-44 sm:w-44 bg-gray-300 rounded-full"></div>
        <div className="flex-grow space-y-4 w-full sm:w-auto">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>
        <div className="h-5 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  </div>
);

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => {
        const foundUser = data.find((u) => u.uid === parseInt(id));
        setUser(foundUser);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <SkeletonLoader />;
  if (!user) return <NotFound />;

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-5xl mx-auto bg-[var(--background-color)] rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-10">
            <div className="flex-shrink-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-36 w-36 sm:h-44 sm:w-44 border-4 border-white shadow-md"
                style={{ backgroundImage: `url(${user.image})` }}
              ></div>
            </div>
            <div className="flex-grow text-center sm:text-left pt-2 sm:pt-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                {user.full_name}
              </h1>
              <p className="text-xl text-gray-600 mt-3">{user.bio}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-8 sm:px-10 py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Personal Information
          </h2>
          <div className="info-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="info-item">
              <span className="info-label block font-medium text-gray-600">
                Date of Birth
              </span>
              <span className="info-value text-gray-800">{user.dob}</span>
            </div>
            <div className="info-item">
              <span className="info-label block font-medium text-gray-600">
                Email
              </span>
              <span className="info-value text-gray-800">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label block font-medium text-gray-600">
                Phone
              </span>
              <span className="info-value text-gray-800">{user.phone}</span>
            </div>
            <div className="info-item sm:col-span-2">
              <span className="info-label block font-medium text-gray-600">
                Address
              </span>
              <span className="info-value text-gray-800">{user.address}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetail;
