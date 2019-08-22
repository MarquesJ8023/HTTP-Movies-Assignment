import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const MovieUpdate = props => {
    const [update, setUpdate] = useState({
        id: props.match.params.id,
        title: '',
        director: '',
        metascore: ''
    });

    const [stars, setStars] = useState([]);
    const changeHandler = e => {
        e.preventDefault();
        setUpdate({...update, [e.target.name]: e.target.value});
    };

    const changeHandler2 = e => {
        e.preventDefault();
        setStars({...stars, [e.target.name]: e.target.value});
    };

    const data = {
        ...update,
        ...setStars
    };

    const updateMovie = e => {
        e.preventDefault();
        console.log('update', update);
        console.log('stars', stars);
        console.log('data', data);
        axios
            .put(`http://localhost:5000/api/movies/${props.match.params.id}`, data)
            .catch(err => console.log(err.response));
        props.history.push(`/`);
    };

    return (
        <div className="updateModal">
            <form className="update-modal" onSubmit={event => updateMovie(event)}>
                <h1 className="updateTitle">Update Movie</h1>
                <p className="updateInput">
                    <label>
                        Title:
                        <input
                            className='input-modal'
                            type="text"
                            name="title"
                            onChange={changeHandler}
                            value={update.title}
                            />
                    </label>
                </p>

                <p className="updateInput">
                    <label>
                        Director:
                        <input
                            className="input-modal"
                            type="text"
                            name="director"
                            onChange={changeHandler}
                            value={update.director}
                            />
                    </label>
                </p>

                <p className="updateInput">
                    <label>
                        Metascore:
                        <input
                            className="input-modal"
                            type="text"
                            name="metascore"
                            onChange={changeHandler}
                            value={update.metascore}
                            />
                    </label>
                </p>

                <p className="updateInput">
                    <label>
                        Stars:
                        <input
                            className="input-modal"
                            type="text"
                            name="stars"
                            onChange={changeHandler2}
                            />
                    </label>
                </p>

                <button
                    onClick={event => updateMovie(event)}>
                        Update
                    </button>

            </form>
        </div>
    );
};

export default withRouter (MovieUpdate);