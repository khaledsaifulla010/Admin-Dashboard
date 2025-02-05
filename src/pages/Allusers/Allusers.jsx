import useAllUsers from "../../hooks/useAllUsers";

const Allusers = () => {
  const [users] = useAllUsers();
  console.log(users);
  return (
    <div>
      <h1 className="mt-10">Allusers</h1>
    </div>
  );
};

export default Allusers;
