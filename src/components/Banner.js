import React from 'react';
export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      down: 'translateY(3px)',
      op:1,
      tran:'0'
    };
  }

  findDistance = (section) => {
    if (document.getElementById(section)) {
        for (let i = window.pageYOffset; i < document.getElementById(section).offsetTop; i++) {
            setTimeout(() => window.scrollTo(0, i), i / 3);
        }
    }
}
  componentDidMount() {
    setInterval(() => {
      if (this.state.down === "translateY(3px)") {
        this.setState({
          down: 'translateY(40px)',
          op:0,
          tran:'1s'
        })
      } else {
        this.setState({
          down: 'translateY(3px)',
          op:1,
          tran:'0s'
        })
      }
    }
      , 1000);
  }
  render() {
    return (
      <div className={this.props.page}>
        <h1>
          {this.props.page}
        </h1>
        <h2 onClick={() => this.findDistance('container')}>
          <div className="Mouse">
            <div
              className="MouseDown"
              style={{
                background: `url(/images/${this.props.page}.jpg) center top no-repeat`,
                transform: this.state.down,
                opacity:this.state.op,
                transition:this.state.tran,
              }}
            >
            </div>
          </div>
        </h2>
      </div>
    );
  }
}
