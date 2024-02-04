import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Accueil, About, Logement, Error404 } from "@/pages/Public/index";

import Layout from "@/Layouts/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/accueil" />} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;