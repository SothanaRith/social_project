import "./rightBar.scss"

const rightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions for You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/63/2c/4a/632c4aea166f7bbe6a596c1336a7b3cf.jpg" alt="" />
                            <span>Penhey</span>
                        </div>


                        <div className="buttons">
                            <button>follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>

                    <div className="user">

                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/d1/2b/b8/d12bb8aa17f90de735ab796c505fa589.jpg" alt="" />
                            <span>hor zin</span>
                        </div>

                        <div className="buttons">
                            <button>follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/63/2c/4a/632c4aea166f7bbe6a596c1336a7b3cf.jpg" alt="" />
                            <p>
                                <span>Penhey </span>
                                broken heart
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className="user">

                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/d1/2b/b8/d12bb8aa17f90de735ab796c505fa589.jpg" alt="" />
                            <p>
                                <span>hor zin </span>
                                buy a new car.
                            </p>

                        </div>

                        <span>100 year ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/6f/dc/cd/6fdccd6b562935e32ce202ea7d32fa67.jpg" alt="" />
                            <p>
                                <span>Seyha </span>
                                are ceating someone.
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className="user">

                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg" alt="" />
                            <p>
                                <span>lyhoung </span>
                                full stack
                            </p>

                        </div>

                        <span>1s ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/63/2c/4a/632c4aea166f7bbe6a596c1336a7b3cf.jpg" alt="" />
                            <div className="online"/>
                            <span>Penhey </span>

                        </div>

                    </div>

                    <div className="user">

                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/d1/2b/b8/d12bb8aa17f90de735ab796c505fa589.jpg" alt="" />
                            <div className="online"/>
                            <span>hor zin </span>



                        </div>


                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/6f/dc/cd/6fdccd6b562935e32ce202ea7d32fa67.jpg" alt="" />
                            <div className="online"/>
                            <span>Seyha </span>


                        </div>

                    </div>

                    <div className="user">

                        <div className="userInfo">
                            <img src="https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg" alt="" />
                            <div className="online"/>
                            <span>lyhoung </span>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
export default rightBar;