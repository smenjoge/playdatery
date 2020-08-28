import React, { useContext } from "react";
import ChildCard from "../ChildCard";
import UserContext from "../../utils/userContext";

function ChildList(props) {
    const { updateChild, deleteChild } = props;
    const { userState } = useContext(UserContext);
    const { user } = userState;

    return (
        <div className={user.children.length > 0 ? "container border border-dark my-4" : "container border border-dark mt-4 invisible"}>
            <ul className="list-group mt-2">
                {user.children.map(child =>
                    <li className="list-group-item border border-dark my-1" key={child._id}>
                        <div className="container">
                            <ChildCard
                                child={child}
                                updateChild={updateChild}
                                deleteChild={deleteChild}
                            />
                        </div>
                    </li>
                )
                }
            </ul>
        </div>
    );
}

export default ChildList;