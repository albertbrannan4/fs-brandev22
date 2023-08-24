"use client";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/media/logowhite.png";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <Image
        style={{ width: "220px", height: "70px" }}
        className="brand-logo"
        src={LOGO}
        alt="brandev22 logo"
      />

      <NavOptions className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </NavOptions>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #28282b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  height: 12vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  border-bottom: 1px solid grey;
`;

const NavOptions = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1em;
`;
