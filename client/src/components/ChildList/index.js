import React, { useContext } from "react";
import ChildCard from "../ChildCard";
import UserContext from "../../utils/userContext";

function ChildList(props) {
    const { updateChild, deleteChild, uploadImage } = props;
    const { userState } = useContext(UserContext);
    const { user } = userState;

    return (
        <div className={user.children.length > 0 ? "container border border-grey my-4" : "container border border-grey mt-4 invisible"} >
            <ul className="list-group mt-2">
                {user.children.map(child =>
                    <li className="list-group-item" key={child._id}>
                        <div className="container">
                            <ChildCard
                                child={child}
                                updateChild={updateChild}
                                deleteChild={deleteChild}
                                uploadImage={uploadImage}
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