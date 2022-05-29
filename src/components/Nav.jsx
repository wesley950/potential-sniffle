import React from "react";
import { Link as ReachLink } from "react-router-dom";

import {
    Center,

    Breadcrumb,
    BreadcrumbItem,
    Link,

} from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Nav() {
    return (
        <Center>
            <Breadcrumb fontWeight='medium' fontSize='large' separator=''>
                <BreadcrumbItem>
                    <Link color='teal.500' to="/" as={ReachLink}>Home <ExternalLinkIcon mx='2px' /></Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link color='teal.500' to="/trending/" as={ReachLink}>Trending <ExternalLinkIcon mx='2px' /></Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link color='teal.500' to="/new/" as={ReachLink}>Recent <ExternalLinkIcon mx='2px' /></Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </Center>
    );
}

export default Nav;
