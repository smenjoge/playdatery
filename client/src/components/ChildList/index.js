import React, { useContext } from "react";
import ChildCard from "../ChildCard";
import Grid from '@material-ui/core/Grid';
import UserContext from "../../utils/userContext";

function ChildList(props) {
    const { updateChild, deleteChild, uploadImage } = props;
    const { userState } = useContext(UserContext);
    const { user } = userState;

    return (
        <div className={user.children.length > 0 ? "container mt-4" : "container mt-4 invisible"} >
            <ul className="list-group mt-2">
                {user.children.map(child =>
                    <li key={child._id}>
                       <Grid container justify="center">
                            <ChildCard
                                child={child}
                                updateChild={updateChild}
                                deleteChild={deleteChild}
                                uploadImage={uploadImage}
                            />
                        </Grid>
                    </li>
                )
                }
            </ul>
        </div>
    );
}

export default ChildList;