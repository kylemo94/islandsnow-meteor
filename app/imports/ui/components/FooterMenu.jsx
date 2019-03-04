import React from 'react';
import { List, Grid, Label, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="3">
            <Grid.Column>
              NAVIGATION
              <hr />
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              MAIN MENU
            <hr />
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              CONNECT
              <hr />
              <List>
                <List.Item>Sign up for the latest udpates</List.Item>
                <List.Item>
                  <Input placeorder="Enter email address" />
                  <Label color="black">Join</Label>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
