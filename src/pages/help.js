import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Help = () => (
  <Layout>
    <h1>Help page</h1>
    <Link to="/">&larr; Home</Link>
  </Layout>
);

export default Help;
