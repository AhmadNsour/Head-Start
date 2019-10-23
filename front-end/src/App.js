import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";

//importing routes
import AddEventPage from "./routes/adding/AddEventPage";
import AddQuestionPage from "./routes/adding/AddQuestionPage";

import AdminDashboardPage from "./routes/admin/AdminDashboardPage";

import AskQuestionPage from "./routes/user/AskQuestionPage";
import LoginPage from "./routes/user/LoginPage";
import RegisterPage from "./routes/user/RegisterPage";
import UserDashboardPage from "./routes/user/UserDashboardPage";
import UserProfilePage from "./routes/user/UserProfilePage";

import AboutUsPage from "./routes/website/AboutUsPage";
import EventPage from "./routes/website/EventPage";
import EventsPage from "./routes/website/EventsPage";
import HrQuestionsPage from "./routes/website/HrQuestionsPage";
import JoinUsPage from "./routes/website/JoinUsPage";
import LandingPage from "./routes/website/LandingPage";
import PostPage from "./routes/website/PostPage";
import TechnicalQuestionsPage from "./routes/website/TechnicalQuestionsPage";

export default class App extends Component {
  state = {
    users: ["users"],
    fields: ["fields"],
    posts: [],
    comments: ["comments"],
    pendings: ["pendings"],
    events: []
  };

  componentDidMount() {
    this.getUsers();
    this.getEvents();
    this.getPosts();
  }

  //USERS FUNCTIONS
  //Please write your code below and only below your name
  getUsers() {
    axios.get("http://localhost:9000/get-users").then(response => {
      this.setState({ users: response.data });
    });
  }

  //FIELDS FUNCTIONS
  //Please write your code below and only below your name
  getFields() {
    axios.get("http://localhost:9000/get-fields").then(response => {
      this.setState({ fields: response.data });
    });
  }

  //POSTS FUNCTIONS
  //Please write your code below and only below your name
  getPosts() {
    axios.get("http://localhost:9000/get-posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  //COMMENTS FUNCTIONS
  //Please write your code below and only below your name
  getComments() {
    axios.get("http://localhost:9000/get-comments").then(response => {
      this.setState({ comments: response.data });
    });
  }

  //PENDINGS FUNCTIONS
  //Please write your code below and only below your name
  getPending() {
    axios.get("http://localhost:9000/get-pending").then(response => {
      this.setState({ pending: response.data });
    });
  }

  //EVENTS FUNCTIONS
  //Please write your code below and only below your name
  getEvents() {
    axios.get("http://localhost:9000/get-events").then(response => {
      this.setState({ events: response.data });
    });
  }

  render() {
    let { users, fields, posts, comments, pendings, events } = this.state;
    console.log(this.state);
    return (
      <div>
        <Router>
          <Header />

          <Link to="/">Home</Link>

          <Route
            exact
            path="/AddEventPage"
            component={routerProps => <AddEventPage {...routerProps} />}
          ></Route>
          <Route
            path="/AddQuestionPage"
            component={routerProps => <AddQuestionPage {...routerProps} />}
          ></Route>

          <Route
            path="/AdminDashboardPage"
            component={routerProps => <AdminDashboardPage {...routerProps} />}
          ></Route>

          <Route
            path="/AskQuestionPage"
            component={routerProps => <AskQuestionPage {...routerProps} />}
          ></Route>
          <Route
            path="/LoginPage"
            component={routerProps => <LoginPage {...routerProps} />}
          ></Route>
          <Route
            path="/RegisterPage"
            component={routerProps => <RegisterPage {...routerProps} />}
          ></Route>
          <Route
            path="/UserDashboardPage"
            component={routerProps => <UserDashboardPage {...routerProps} />}
          ></Route>
          <Route
            path="/UserProfilePage"
            component={routerProps => <UserProfilePage {...routerProps} />}
          ></Route>

          <Route
            path="/AboutUsPage"
            component={routerProps => <AboutUsPage {...routerProps} />}
          ></Route>
          <Route
            path="/EventPage"
            component={routerProps => <EventPage {...routerProps} />}
          ></Route>
          <Route
            path="/EventsPage"
            component={routerProps => <EventsPage {...routerProps} />}
          ></Route>
          <Route
            path="/HrQuestionsPage"
            component={routerProps => <HrQuestionsPage {...routerProps} />}
          ></Route>
          <Route
            path="/JoinUsPage"
            component={routerProps => <JoinUsPage {...routerProps} />}
          ></Route>
          <Route
            exact
            path="/"
            component={routerProps => (
              <LandingPage {...routerProps} events={events} posts={posts} />
            )}
          ></Route>
          <Route
            path="/PostPage"
            component={routerProps => <PostPage {...routerProps} />}
          ></Route>
          <Route
            path="/TechnicalQuestionsPage"
            component={routerProps => (
              <TechnicalQuestionsPage {...routerProps} />
            )}
          ></Route>

          <Footer />
        </Router>
      </div>
    );
  }
}
