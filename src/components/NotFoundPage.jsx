import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <h1>OOOps!!</h1>
        <h2>Not Found!</h2>
        <Link to="/">
            <button>Go Home</button>
        </Link>
    </div>
)

export { NotFoundPage as default }