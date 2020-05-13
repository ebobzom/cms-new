import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import db from '../../config/database';

const comment = (req, res) => {
    // check for user input errors
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(401).json({
            status: 'error',
            error: errors.array()
        });
        return;
    }
   
    // make a copy of category
    const { 
        comment,
        star,
        productId: product_id
    } = req.body;

    const token = req.cookies.token;

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if(err){
            res.status(401).json({
                status: 'error',
                error: err.message
            });
            return;
        }
        
        // insert into db
        const queryString = `INSERT INTO product_comments SET ?`
        const { userId: user_id } = decoded;

        const data = { 
            comment,
            star,
            user_id,
            product_id
        };
        db.query(queryString, data, (dbErr, result) => {
            if(dbErr){
                res.status(401).json({
                    status: 'error',
                    error: dbErr.message
                });
                return;
            }

            // add comment id
            data.comment = result.insertId;

            res.status(201).json({
                status: 'success',
                data: data
            });
            return;

        });

        res.status(401).json({
            status: 'error',
            error: 'only admin is allowed'
        });
        return;
    });
};

export default comment;