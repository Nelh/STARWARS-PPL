import { useQuery } from "@apollo/client";
import { useHistory } from 'react-router-dom';
import { GET_PEOPLE_DETAILS } from '../Graphql/Queries'

interface Props {
    PeopleId?: any;
}

const PeopleDetails: React.FC<Props> = (PeopleId: any) => {
    let history = useHistory();
    let { id }  = PeopleId.match.params;
    const { loading, error, data } = useQuery(GET_PEOPLE_DETAILS, {
        variables: { id: parseInt(id)},
    });

    if(loading) return <h5 className="text-center mt-5">Loading...</h5>;
    if(error) return <h5 className="text-center mt-5">Something went wrong!</h5>;

    const { name, mass, height, gender, homeworld } = data.getPeopleDetails;

    return (
        <>
        <h4 className="my-3">People details</h4>
        <ul className="list-group mb-4">
            <li className="list-group-item text-white">Name: { name }</li>
            <li className="list-group-item text-white">Mass: { mass }</li>
            <li className="list-group-item text-white">height: { height }</li>
            <li className="list-group-item text-white">gender: { gender }</li>
            <li className="list-group-item text-white">homeworld: { homeworld }</li>
        </ul>
        <button className="btn btn-secondary" onClick={() => history.goBack()}>Back</button>
        </>
    );
  }

export default PeopleDetails;