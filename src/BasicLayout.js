import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 12
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

//   generateDOM() {
//     return _.map(_.range(this.props.items), function(i) {
//       return (
//         <div key={i}>
//           <span className="text">{i}</span>
//         </div>
//       );
//     });
//   }

  generateLayout() {
    const p = this.props
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 1,
        h: 1,
        i: i.toString()
      }
    })
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  // renderData() {
  //   return this.props.data.map((item) => (
  //     <div key={item.sku} >
  //       <img src={item.image} alt="product"   />
  //     </div>
  //   ))
  // }

  // renderData() {
  //  return this.props.data.map((item, index) => {
  //     const style = {border: '1px solid black'}
  
  //     return (
  //         <div style={style} key={item} >
  //             <div className="text"> {item} </div>
  //             {/* <div className="text"> {item.job} </div> */}
  //             <span className="text"> {index} </span>
  //         </div>
  
  //         // <div style={style} key={index} >
  //         //   <div className="text"> {item.sku} </div>
  //         //   <span className="text"> {index} </span>
  //         // </div>
  //     )
  //   })
  // }

  // renderData() {
  //   const style = {border: '1px solid black'}
  //   return this.props.data.map((item, index) => (
  //     <div style={style} key={index} >
  //             {/* <div className="text"> {item.name} </div> */}
  //             <div className="text"> {item} </div>
  //             {/* <div className="text"> {item.job} </div> */}
  //             <span className="text"> {index} </span>
  //         </div>
  //   ))
  // }

  render() {
    const style = {border: '1px solid black'}
    const data = this.props.data
    console.log(data)
    const Grids = data.map((product, index) => {
        return (
            <div style={style} key={index} >
                <div className="text"> {product.name} </div>
                <div className="text"> {product.job} </div>
                <span className="text"> {index} </span>
            </div>

            // <div style={style} key={index} >
            //   <div className="text"> {item.sku} </div>
            //   <span className="text"> {index} </span>
            // </div>
        )
    })

    // const Grids = this.props.data.map((item) => (
    //   <div key={item.sku} >
    //     <img src={item.image} alt="product"   />
    //   </div>
    // ))
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {/* {this.generateDOM()} */}
        {Grids}
        {/* {this.renderData()} */}
      </ReactGridLayout>
    );
  }
}

export default BasicLayout