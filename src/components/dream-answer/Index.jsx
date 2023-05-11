import React from 'react';
import { Button, Card, CardText, CardTitle } from 'reactstrap';

function Index({dreamAnalized}) {
    return (
        <Card
          body
          className="my-2 col-12"
        >
          <CardTitle tag="h5">
           Rüyanızın analizi şöyledir
          </CardTitle>
          <CardText style={{textDecoration:"undeline"}}>
            {dreamAnalized}
          </CardText>
     
        </Card>
    );
}

export default Index;