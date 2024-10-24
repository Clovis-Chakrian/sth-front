import React from "react";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/login/LoginPage";
import Squad from "../features/mentor/squad/Squad";
import MentorPage from "../features/mentor";
import LogoScreen from "../pages/logo_screen/LogoScreen";
import StudentPage from "../features/student/StudentPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "../pages/profile_page/ProfilePage";
import RepresentativePage from "../features/representative/RepresentativePage";
import HomeMentor from "../features/mentor/home/HomeMentor";
import Mentoria from "../features/mentor/mentoria/Mentoria";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LogoScreen />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/mentor"
        element={
          <PrivateRoute profile="mentor">
            <MentorPage />
          </PrivateRoute>
        }
      >
        <Route
          index
          element={
            <div>
              <HomeMentor />
            </div>
          }
        />
        <Route path="squad" element={<Squad />} />
        <Route path="mentoria/:id" element={<Mentoria />} />
      </Route>

      <Route
        path="/representative"
        element={
          <PrivateRoute profile="representative">
            <RepresentativePage />
          </PrivateRoute>
        }
      >
        {/* <Route path="dashboard" element={<UserDashboard />} /> */}
      </Route>

      <Route
        path="/student"
        element={
          <PrivateRoute profile="student">
            <StudentPage />
          </PrivateRoute>
        }
      >
        {/* <Route path="info" element={<GuestInfo />} /> */}
      </Route>

      {/* Redireciona para a tela de seleção de perfil caso não encontre a rota */}
      <Route path="*" element={<Navigate to="/profile" />} />
    </Routes>
  );
};

export default AppRouter;
