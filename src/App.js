import "./App.css"
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CoursePage from "./pages/CoursePage"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout/Layout"
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesByCategoryId from './pages/CoursesByCategoryId'
import AuthForm from './components/Auth/AuthForm'


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/course' />
          </Route>
          <Route path='/course' exact>
            <CoursePage />
          </Route>
          <Route path='/course/:id' exact>
            <CourseDetailPage />
          </Route>
          <Route path='/course/:id/category'>
            <CoursesByCategoryId />
          </Route>
          <Route path='/auth'>
            <AuthForm />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route >
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
