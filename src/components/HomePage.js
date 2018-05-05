import React, { Component } from 'react';
import './homePage.css';
import { Accordion, Icon, Grid, Image, Checkbox} from 'semantic-ui-react';
import defaPic from './defaPic.png';
import * as json from './staticJson';

class HomeComponent extends Component {
   constructor(props) {
     super(props);
     this.state = {
       activeIndex: 0,
       isAccOneOpen:true,
       isAccTwoOpen: false,
       isAccThreeOpen: false,
       checkBoxValue:false,
       checkBoxValue2: false
       }
     this.handleClick = this.handleClick.bind(this);
     this.generalOnChange = this.generalOnChange.bind(this);
     this.deDuplicationOnChange = this.deDuplicationOnChange.bind(this);
   }

   generalOnChange() {
     console.log('onchange');
     this.setState({ isAccTwoOpen: true, checkBoxValue: !this.state.checkBoxValue})
   }

   deDuplicationOnChange () {
     this.setState({ isAccThreeOpen: true, checkBoxValue2: !this.state.checkBoxValue2})
   }

   handleClick = (e, titleProps) => {
     const { index } = titleProps;
     const { isAccOneOpen, isAccTwoOpen, isAccThreeOpen } = this.state
      if(index === 0) {
        this.setState({ isAccOneOpen: !isAccOneOpen });
     } if (index === 1) {
       this.setState({ isAccTwoOpen: !isAccTwoOpen })
      } if (index === 2) {
        this.setState({ isAccThreeOpen: !isAccThreeOpen })
      }
   }

  render() {
    const { activeIndex, isAccOneOpen, isAccTwoOpen, isAccThreeOpen, checkBoxValue, checkBoxValue2} = this.state;
    var myData = json.jsonData[0];
    return (
       <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="">Front-end Assessment</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">Menu_1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Menu_2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Menu_3</a>
              </li>
            </ul>
          </div>
        </nav>
        <br />

          <div className="container">
          <Grid>
            <Grid.Column floated='left' width={12} >
              <Accordion styled className="full-wid">
                <Accordion.Title style={{ backgroundColor: '#5fc0c6' }} active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  {isAccOneOpen ?
                    <Icon bordered name='chevron down' />
                    :
                    <Icon bordered name='chevron right' />
                  }
                  General / Data Clean-up
        </Accordion.Title>
                <Accordion.Content active={isAccOneOpen} style={{marginTop:'20px'}}>
                  <div className="container h-100">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="d-flex flex-column" style={{marginLeft:'10px'}}>
                        <Image className="text align-self-center p-2" src={defaPic} size='small' />
                        <Checkbox checked={this.state.checkBoxValue} onChange={this.generalOnChange} className="align-self-center p-2" label={myData.parentName}/>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
                {checkBoxValue ?
                <div>
                <Accordion.Title style={{ backgroundColor: '#e0bd69' }} active={activeIndex === 1} index={1} onClick={this.handleClick}>
                  {isAccTwoOpen ?
                    <Icon bordered name='chevron down' />
                    :
                    <Icon bordered name='chevron right' />
                  }
                  Deduplication (Mapping and Marking duplicates)
        </Accordion.Title>
                <Accordion.Content active={isAccTwoOpen} style={{ marginTop: '20px' }}>
                  <div className="container h-100">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="d-flex flex-row">
                        { myData.childOne.map((data, i) => (
                        <div key={i} className="d-flex flex-column" style={{ marginLeft: '10px' }}>
                          <Image className="text align-self-center p-2" src={defaPic} size='small' />
                          <Checkbox onChange={this.deDuplicationOnChange} className="align-self-center p-2"
                            label={data.childName} />
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Accordion.Content>

                </div>
                 :
                <div></div>
                }
                {checkBoxValue2 ?
                <div>
                <Accordion.Title style={{ backgroundColor: '#82d893' }} active={activeIndex === 2} index={2} onClick={this.handleClick}>
                  {isAccThreeOpen ?
                    <Icon bordered name='chevron down' />
                    :
                    <Icon bordered name='chevron right' />
                  }
                  Alignment / Local Realignment around Indels
        </Accordion.Title>
                <Accordion.Content active={isAccThreeOpen} style={{ marginTop: '20px' }}>
                  <div className="container h-100">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="d-flex flex-row">
                        {myData.childTwo.map((data, i) => (
                      <div className="d-flex flex-column" style={{ marginLeft: '10px' }}>
                        <Image className="text align-self-center p-2" src={defaPic} size='small' />
                        <Checkbox className="align-self-center p-2" label={data.childName} />
                      </div>
                       ))}
                    </div>
                   </div>
                  </div>
                </Accordion.Content>

                  </div>
                  :
                  <div></div>
                }

              </Accordion>
            </Grid.Column>
            <Grid.Column floated='right' width={4} >
              <div className="full-wid">
              <h2>Tree Structure here !!!</h2>
              </div>
            </Grid.Column>
          </Grid>
          </div>
          
        </div>
    );
  }
}

export default HomeComponent;
