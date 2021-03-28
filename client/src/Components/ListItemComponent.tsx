import { Link } from 'react-router-dom';

interface People {
    name: string;
    height: string;
    mass: string;
    gender: string;
    url: string;
}

interface Props {
    people: People 
}

export const ListItem: React.FC<Props> = ({ people }) => {
    let url = people.url.split('/');
    let id = url[url.length-2];

    return (
        <Link to={`/people/${id}`} className="text-decoration-none text-dark">
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <div>Name: { people.name }</div>
                        <div>
                            <span>Mass: { people.mass }</span>
                            <span className="mx-1">Height: { people.height }</span>
                            <span className="mx-1">Gender: { people.gender }</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}