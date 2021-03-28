import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';
import { GET_PEOPLE_DETAILS } from '../Graphql/Queries'

interface Props {
    PeopleId?: any;
}

const People: React.FC<Props> = (PeopleId: any) => {
    let { id }  = PeopleId.match.params;
    const { loading, error, data } = useQuery(GET_PEOPLE_DETAILS, {
        variables: { id: parseInt(id)},
    });

    if(loading) return <h4>Loading...</h4>;
    if(error) return <h4>Something went wrong!</h4>;

    const { name, mass, height, gender, homeworld } = data.getPeopleDetails;

    return (
     <>
        <div className="container mt-4">
            <h4 className="my-3">People detail</h4>
            <ul className="list-group mb-4">
                <li className="list-group-item">Name: { name }</li>
                <li className="list-group-item">Mass: { mass }</li>
                <li className="list-group-item">height: { height }</li>
                <li className="list-group-item">gender: { gender }</li>
                <li className="list-group-item">homeworld: { homeworld }</li>
            </ul>
            <Link to="/" className="btn btn-secondary">Home</Link>
        </div>
     </>
    );
  }

export default People;