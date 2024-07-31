
const Card = ({data}: any) => (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.address.street}</p>
      <p>{data.address.suite}</p>
      <p>{data.address.city}</p>
      <p>{data.address.zipcode}</p>
      <p>{data.phone}</p>
      <p>{data.website}</p>
      <p>{data.company.bs}</p>
      <p>{data.company.catchPhrase}</p>
      <p>{data.company.name}</p>
    </div>
  );

  export default Card;