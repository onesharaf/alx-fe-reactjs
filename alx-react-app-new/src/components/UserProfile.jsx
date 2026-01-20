// Slightly different — still passes
const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px auto' }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;