import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const Breadcrumbs = props => {
    const {
        history,
        location: { pathname }
    } = props;
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <MUIBreadcrumbs aria-label="breadcrumb">
            {pathnames.length > 0 ? (
                <Link onClick={() => history.push("/")} style={{ color: '#007bff' }}>Galvenā</Link>
            ) : (
                    <Typography> Galvenā </Typography>
                )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                if (name === 'articles') {
                    name = 'Raksti'
                } else if (name === 'article1' || name === 'article2' || name === 'article3') {
                    name = "Raksts par un ap rasolu"
                } else if (name === 'chat') {
                    name = 'Viesu grāmata'
                } else if (name === 'registration') {
                    name = 'Reģistrācija'
                } else if (name === 'about-us') {
                    name = 'Par mums'
                }
                return isLast ? (
                    <Typography key={name}>{name}</Typography>
                ) : (
                        <Link key={name} onClick={() => history.push(routeTo)} style={{ color: '#007bff' }}>
                            {name}
                        </Link>
                    );
            })}
        </MUIBreadcrumbs>
    );
};

export default withRouter(Breadcrumbs);
