import { Fragment, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { fetchActiveRequest, reset } from "../redux/app/app.slice";
import { FULFILLED, PENDING } from "../constant/state";

const Home = () => {
    const dispatch = useAppDispatch();
    const active = useAppSelector((state) => state.app.active);
    const fetchActiveStatus = useAppSelector((state) => state.app.fetchActiveStatus)

    // Dispatch the fetchActiveRequest action when the component mounts
    useEffect(() => {
        dispatch(fetchActiveRequest(0))
    }, []);

    const handleResetClick = () => {
        // Dispatch the reset action to reset the state to initial values
        dispatch(reset());
        dispatch(fetchActiveRequest(0));

    };

    useEffect(() => {
        console.log(fetchActiveStatus, active);
    }, [fetchActiveStatus, active]);

    return (
        <Fragment>
            <div className="bg-purple-500">
                {fetchActiveStatus === PENDING ? (
                    <div>Loading...</div>
                ) : fetchActiveStatus === FULFILLED ? (
                    <div>
                        Active Status: <p className="text-green-700">{active ? 'True' : 'False'}</p>
                        <button className="border-2 border-gray-600" onClick={handleResetClick}>Reset</button>
                    </div>
                ) : (
                    <div>Error occurred while fetching active status.</div>
                )}
            </div>
        </Fragment>
    )
}

export default Home;