import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="grid grid-cols-1 gap-3 my-10 mx-5">
      <div
        className="card-body rounded-xl"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="chat chat-start">
          <div className="chat-bubble  text-xl">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble  text-sm">
            <span className="text-lg">Access token </span>is a credential used
            in authentication and authorization systems to grant a client
            application access to protected resources. It is a string of
            characters that represents the authorization granted to a user or an
            application. <span className="text-lg">Refresh token </span> is a
            credential that is used to obtain a new access token without
            requiring the user to reauthenticate. When a user or an application
            successfully authenticates with a server, the server generates an
            access token and a refresh token. The access token represents the
            authorization granted, and the refresh token is used to obtain a new
            access token when the current one expires. The server sends the
            access token and refresh token to the client as part of the
            authentication response. The tokens are usually included in the
            response body or as HTTP headers. The server validates the refresh
            token to ensure its authenticity and validity. If the refresh token
            is valid, the server issues a new access token, which is sent back
            to the client. Access token and refresh token shouldn't be stored in
            the local/session storage, because they are not a place for any
            sensitive data. Hence I would store them in a httpOnly cookie (even
            though there is CSRF) and I need it for most of my requests to the
            Resource Server anyway.
          </div>
        </div>
      </div>
      <div
        className="card-body rounded-xl"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="chat chat-start">
          <div className="chat-bubble  text-xl">
            Compare SQL and NoSQL databases?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble  text-sm">
            <span className="text-lg"> SQL (Structured Query Language)</span>
            databases are based on the relational model and utilize SQL as the
            standard language for managing and querying data.
            <span className="text-lg"> NoSQL (Not Only SQL)</span> databases are
            designed to handle large-scale, unstructured, and semi-structured
            data. SQL databases are vertically scalable, while NoSQL databases
            are horizontally scalable. SQL databases are table-based, while
            NoSQL databases are document, key-value, graph, or wide-column
            stores. SQL databases are better for multi-row transactions, while
            NoSQL is better for unstructured data like documents or JSON.
            Examples of SQL databases include MySQL, PostgreSQL, Oracle
            Database, Microsoft SQL Server, and SQLite. Examples of NoSQL
            databases include MongoDB, Cassandra, CouchDB, Redis, and Amazon
            DynamoDB.
          </div>
        </div>
      </div>
      <div
        className="card-body rounded-xl"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="chat chat-start">
          <div className="chat-bubble  text-xl">
            What is express js? What is Nest JS?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble  text-sm">
            <span className="text-lg">Express.js </span> is the most popular web
            framework for Node.js, a JavaScript runtime environment. It is
            designed for building web applications and APIs and has been called
            the de facto standard server framework for Node.js. It provides a
            simple and flexible way to build web applications and APIs by
            providing a set of features and utilities to handle routing,
            middleware, request/response handling, handle errors, perform
            authentication, and more. <br />
            <span className="text-lg">Next.js </span> is a React framework that
            gives you building blocks to create web applications.It handles the
            tooling and configuration needed for React, and provides additional
            structure, features, and optimizations for your application. Also it
            simplifies the development of React applications by offering
            server-side rendering, static site generation, and other performance
            optimizations out of the box.
          </div>
        </div>
      </div>
      <div
        className="card-body rounded-xl"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="chat chat-start">
          <div className="chat-bubble text-xl">
            What is MongoDB aggregate and how does it work
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble text-sm">
            <span className="text-lg">MongoDB's</span> aggregate is a powerful
            framework used for data aggregation and a way of processing a large
            number of documents in a collection by means of passing them through
            different stages. The stages make up what is known as a pipeline.
            The stages in a pipeline can filtering, sorting, grouping,
            projecting, transforming, calculating new fields and modify
            documents that pass through the pipeline. Here are some commonly
            used stages in the aggregation pipeline $match, $group, $project,
            $sort, $limit, $skip ,$lookup etc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
