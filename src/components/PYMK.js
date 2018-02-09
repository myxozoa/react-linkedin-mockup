import React from 'react';
import Person from './Person';

class PYMK extends React.Component {
    state = {
        data: [
            {
                profile_pic:
                    'https://robohash.org/recusandaeetneque.png?size=100x100&set=set1',
                company: 'Skilith',
                id: '5a7b6e8efc13ae3d7900000d',
                job_title: 'Structural Analysis Engineer',
                name: 'Valentina Spilsburie',
                connection: 'Itch Meads',
            },
            {
                profile_pic:
                    'https://robohash.org/voluptatesutvel.png?size=100x100&set=set1',
                company: 'Voonix',
                id: '5a7b6e8efc13ae3d7900000e',
                job_title: 'Clinical Specialist',
                name: 'Ulrike Van der Kruys',
                connection: 'Yehudit Stidston',
            },
            {
                profile_pic:
                    'https://robohash.org/quisquamsitvoluptate.png?size=100x100&set=set1',
                company: 'Skinder',
                id: '5a7b6e8efc13ae3d7900000f',
                job_title: 'General Manager',
                name: 'Nanette Fagg',
                connection: 'Marybelle Felgat',
            },
            {
                profile_pic:
                    'https://robohash.org/possimusmollitiaquibusdam.png?size=100x100&set=set1',
                company: 'Thoughtstorm',
                id: '5a7b6e8efc13ae3d79000010',
                job_title: 'Outreach Specialist',
                name: 'Albrecht Pleasance',
                connection: 'Jamie Woolaghan',
            },
            {
                profile_pic:
                    'https://robohash.org/suntvoluptatemut.png?size=100x100&set=set1',
                company: 'Digitube',
                id: '5a7b6e8efc13ae3d79000011',
                job_title: 'Statistician I',
                name: 'Katey Cosby',
                connection: 'Reggis Jaycock',
            },
            {
                profile_pic:
                    'https://robohash.org/impeditcupiditateest.png?size=100x100&set=set1',
                company: 'Kazu',
                id: '5a7b6e8efc13ae3d79000012',
                job_title: 'Research Associate',
                name: 'Manon Wasmer',
                connection: 'Mendel Freckingham',
            },
            {
                profile_pic:
                    'https://robohash.org/nisietmaiores.png?size=100x100&set=set1',
                company: 'Dabvine',
                id: '5a7b6e8efc13ae3d79000013',
                job_title: 'Actuary',
                name: 'Magda Oldroyd',
                connection: 'Dee Freke',
            },
            {
                profile_pic:
                    'https://robohash.org/inventoreessereprehenderit.png?size=100x100&set=set1',
                company: 'Abatz',
                id: '5a7b6e8efc13ae3d79000014',
                job_title: 'Statistician I',
                name: 'Dudley McEntagart',
                connection: 'Marlin Antonucci',
            },
            {
                profile_pic:
                    'https://robohash.org/eosmolestiaequasi.png?size=100x100&set=set1',
                company: 'InnoZ',
                id: '5a7b6e8efc13ae3d79000015',
                job_title: 'Help Desk Technician',
                name: 'Abner Anstice',
                connection: 'Nickola Gude',
            },
            {
                profile_pic:
                    'https://robohash.org/voluptatemconsequaturaspernatur.png?size=100x100&set=set1',
                company: 'Mudo',
                id: '5a7b6e8efc13ae3d79000016',
                job_title: 'Senior Sales Associate',
                name: 'Ray Cawkwell',
                connection: 'Hoebart Poston',
            },
            {
                profile_pic:
                    'https://robohash.org/nobisdignissimosad.png?size=100x100&set=set1',
                company: 'Bubblemix',
                id: '5a7b6e8efc13ae3d79000017',
                job_title: 'Registered Nurse',
                name: 'Clemmy Vuittet',
                connection: 'Duky Stanes',
            },
            {
                profile_pic:
                    'https://robohash.org/consequaturquototam.png?size=100x100&set=set1',
                company: 'Brightdog',
                id: '5a7b6e8efc13ae3d79000018',
                job_title: 'Structural Analysis Engineer',
                name: 'Wilfred Deyes',
                connection: 'Ingeborg Poytheras',
            },
            {
                profile_pic:
                    'https://robohash.org/temporeveritatisconsectetur.png?size=100x100&set=set1',
                company: 'Skiba',
                id: '5a7b6e8efc13ae3d79000019',
                job_title: 'Design Engineer',
                name: 'Marnia Lethabridge',
                connection: 'Michail Whistan',
            },
        ],
    };

    removePerson = (id) => {
        const newData = this.state.data.filter(person => {
            return person.id !== id;
        });
        this.setState({ data: newData });
    }

    render() {
        return (
            <div className="pymk">
                <div className='pymk-title'> People you may know</div>
                <div className='people'>
                {this.state.data.map(person => {
                    return (

                    <Person
                        key={person.id}
                        id={person.id}
                        pic={person.profile_pic}
                        name={person.name}
                        job={person.job_title}
                        company={person.company}
                        connection={person.connection}
                        incdec={this.props.incdec}
                        remove={this.removePerson}
                    />
                    );
                })}
                </div>
            </div>
        );
    }
}
export default PYMK;
