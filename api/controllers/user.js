import { db } from "../connect.js";

import jwt from "jsonwebtoken"

export const getAllUsers = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("ចុះឈ្មោះសិនទៅបានប្រើបាន​!")

    jwt.verify(token, "secretkey", (err, userInfo) => {
        

    const q = "SELECT * FROM users WHERE users.id != ? " ;

    db.query(q,[userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
})
};



// only follower
export const getUsers = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("ចុះឈ្មោះសិនទៅបានប្រើបាន​!")

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const q = `SELECT u.*, u.id AS userId, name, profilePic FROM relationships AS r JOIN users AS u ON (u.id = r.followedUserId) WHERE r.followerUserId =?`;

        //note userId must not undefined if it undefined so it don't show all data 

        db.query(q, [userInfo.id], (err, data) => {
            console.log(data)
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });

}

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id= ?"

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err)
        const { password, ...info } = data[0];
        return res.json(info)
    })
}
export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("ចុះឈ្មោះសិន បានប្រើបាន​!")

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q = "UPDATE users SET `name`=?, `city`=?,`website`=?,`profilePic`=?,`coverPic`=? WHERE id= ?"

        db.query(q, [
            req.body.name,
            req.body.city,
            req.body.website,
            req.body.profilePic,
            req.body.coverPic,
            userInfo.id


        ], (err, data) => {
            if (err) res.status(500).json(err)
            if (data.affectedRows > 0) return res.json("Update!")
            return res.status(403).json("you can Update only your Posts")
        })
    })
}