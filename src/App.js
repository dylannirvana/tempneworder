import React, { Component } from 'react';
// import './App.css';
import BasicLayout from './BasicLayout'

// grid = data


class App extends Component {

  render() {
    // const grid = [ "jack", "jill", "hill", "beer", "haircut"]

    // const singlepairs = [
    //     {
    //     name: "jack"
    //   },
    //   {
    //     name: "jill"
    //   },
    //   {
    //     name: "alex"
    //   },
    //   {
    //     name: "sam"
    //   },
    //   {
    //     name: "lex"
    //   },
    // ]

    const pairs = [
      {
        name: "jack",
        job: "guitarist"
      },
      {
        name: "jill",
        job: "cellist"
      },
      {
        name: "alex",
        job: "painter"
      },
      {
        name: "bill",
        job: "moron"
      },
      {
        name: "hilly",
        job: "philanthropist"
      },
      // {
      //   name: "hack",
      //   job: "drummer"
      // },
      // {
      //   name: "jill",
      //   job: "waterist"
      // },
      // {
      //   name: "hill",
      //   job: "keyboards"
      // },
      // {
      //   name: "jack",
      //   job: "marketer"
      // },
      // {
      //   name: "jill",
      //   job: "humorist"
      // },
      // {
      //   name: "alex",
      //   job: "writer"
      // },
      // {
      //   name: "bill",
      //   job: "tech"
      // },
      // {
      //   name: "hilly",
      //   job: "banker"
      // },
      // {
      //   name: "hack",
      //   job: "mover"
      // },
      // {
      //   name: "jill",
      //   job: "shaker"
      // },
      // {
      //   name: "hill",
      //   job: "dancer"
      // },
      // {
      //   name: "jack",
      //   job: "pilot"
      // },
      // {
      //   name: "jill",
      //   job: "policeman"
      // },
      // {
      //   name: "alex",
      //   job: "crook"
      // },
      // {
      //   name: "bill",
      //   job: "god"
      // },
      // {
      //   name: "hilly",
      //   job: "rockstar"
      // },
      // {
      //   name: "hack",
      //   job: "philosopher"
      // },
      // {
      //   name: "jill",
      //   job: "hermit"
      // },
      // {
      //   name: "hill",
      //   job: "organist"
      // },
      // {
      //   name: "jack",
      //   job: "fan"
      // },
      // {
      //   name: "jill",
      //   job: "groupie"
      // },
      // {
      //   name: "alex",
      //   job: "soundman"
      // },
      // {
      //   name: "bill",
      //   job: "bartender"
      // },
      // {
      //   name: "hilly",
      //   job: "bouncer"
      // },
      // {
      //   name: "hack",
      //   job: "pusher"
      // },
      // {
      //   name: "jill",
      //   job: "merchgirl"
      // },
      // {
      //   name: "hill",
      //   job: "manager"
      // },
      // {
      //   name: "jack",
      //   job: "publicist"
      // },
      // {
      //   name: "jill",
      //   job: "label"
      // },
      // {
      //   name: "alex",
      //   job: "coach"
      // },
      // {
      //   name: "bill",
      //   job: "teacher"
      // },
    ] // END

    return (
      <div className="App">
       <BasicLayout data={pairs} />,
      </div>


    );
  }
}

export default App;
