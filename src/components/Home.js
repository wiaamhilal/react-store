import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <div class="sm-img mt-2">
        <div class="box">
          <div class="image">
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590947_s9tmwd.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590895_riyc9u.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623771/1732623590853_eywhy7.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590918_vvp4g2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590888_xvf1nk.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590848_khwmer.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623771/1732623590858_exqxs6.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590902_kim4en.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623765/1732623590872_egjdqj.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="box">
          <div class="image">
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590927_luimaz.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590864_tfq13i.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="sc-bdnyFh bobYdn pt-5">
        {/* <img
          src="https://cdn5.f-cdn.com/contestentries/265507/14720579/55e45eb471824_thumb900.jpg"
          alt=""
          class="first-img"
        /> */}
        {/* <div class="sc-gtsqUy cCsljz">
          <p>
            Welcome to <span class="name">Cherry</span> website! I'm thrilled to
            have you here. Explore, connect, and discover more about me and my
            passions. Thank you for visiting
          </p>
        </div> */}
        <div className="container my-grid">
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590881_wnj6fg.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Lebanon</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590947_s9tmwd.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Syria</h3>
                  <h5 className="">15 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623765/1732623590909_q1hl3q.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Egypt</h3>
                  <h5 className="">14 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590895_riyc9u.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Lebanon</h3>
                  <h5 className="">13 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623765/1732623590872_egjdqj.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Morocco</h3>
                  <h5 className="">16 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590902_kim4en.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623771/1732623590858_exqxs6.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Lebanon</h3>
                  <h5 className="">15 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590927_luimaz.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Lebanon</h3>
                  <h5 className="">12 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590834_eez8hk.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623771/1732623590853_eywhy7.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590864_tfq13i.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590842_h2vghp.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Syria</h3>
                  <h5 className="">18 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590940_mcoihr.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590918_vvp4g2.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623767/1732623590848_khwmer.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Jordan</h3>
                  <h5 className="">17 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div class="box mb-3 text-black">
              <img
                src="https://res.cloudinary.com/difwxqb62/image/upload/v1732623766/1732623590888_xvf1nk.jpg"
                alt=""
              />
              <div class="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>Syria</h3>
                  <h5 className="">15 years old</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  eum iure iusto deserunt repellendus, explicabo eveniet
                  dignissimos. Enim eveniet totam ullam laboriosam quia fuga
                  repellat sint? Voluptatum cum ea tenetur.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: calc(-74px + 55vh);
  background: linear-gradient(black 46%, white);
  & .first-img {
    width: 100%;
  }
  & .bobYdn {
  }
  & .cCsljz {
    text-align: center;
    padding: 0px 10px;
    transform: translateY(50%);
    line-height: 2;
    font-weight: bold;
    color: rgb(204, 204, 204);
  }
  & .myGreen {
    color: rgb(8, 211, 100);
  }
  & .my-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
    & .box {
      border-radius: 6px;
      box-shadow: 0px 2px 15px rgb(0 0 0 / 40%);
      position: relative;
      transition: 0.3s, box-shadow 0.3s;
    }
    & img {
      width: 100%;
      border-radius: 6px;
      max-width: 100%;
    }
    & .content {
      padding: 20px;
    }
  }
  & .sm-img {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 7px;
    & .box {
      background-color: white;
      border-radius: 6px;
      box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
      padding: 5px;
      & .image {
        overflow: hidden;
        position: relative;
        height: 100px;
        & img {
          max-width: 100%;
          border-radius: 6px;
          transition: 0.3s;
          max-height: 100%;
        }
      }
    }
  }
`;

export default Home;
