import { connection } from "../config";

class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
            SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products;
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to ferch all products')
                    res.json({
                status: res.statusCode,
                results
        })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchProducts(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, category, prodDescription, prodURL, amount
            FROM Products
            ORDER BY prodID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrievw recent products')
                    res.json({
                status: res.statusCode,
                results
            })
            })
        } catch {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchProduct(req, res) {
        try {
            const strQry = `
            SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products
            WHERE productID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrive product')
                    res.json({
                status: res.statusCode,
                results
            })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    addProduct(req, res) {
        try {
        const strQry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(strQry, [req.body], (err) => {
            if (err) throw new Error('Unable to add a new product')
                res.json({
            status: res.statusCode,
        msg: 'Products is successfully added'})
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
}
    updateProduct(req, res) {
        try{
        const strQry = `
        UPDATE Products
        SET ?
        WHERE ProductID = ${req.params.id};
     `
     db.query(strQry, [req.body], (err) => {
        if (err) throw new Error('Unable to update the product')
            res.json({
        status: res.statusCode,
    msg: 'Product was updated'
})
     })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    deleteProduct(req, res) {
        try {
            const strQry = `
            DELETE FROM Products
            WHERE productID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete a product')
                    res.json({
                        status: res.statusCode,
                        msg: 'The product was deleted'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
}

export {
    Products
}