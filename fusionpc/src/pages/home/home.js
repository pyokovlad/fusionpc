import React, { Component } from 'react';
import '/workspaces/fusionpc/fusionpc/src/pages/home/home.css';

import FusionPC from '/workspaces/fusionpc/fusionpc/src/components/fusionpc/fusionpc.js'
import Advantages from '/workspaces/fusionpc/fusionpc/src/components/advantages/advantages.js'
import Details from '/workspaces/fusionpc/fusionpc/src/components/details/details.js'
import Footer from '/workspaces/fusionpc/fusionpc/src/components/footer/footer.js'

export default class Home extends Component {
    render() {
        return (
            <div class="all">
      <div class="allmain">
        <div class='main'>
          <div id="fusionpc">
            < FusionPC />
          </div>
        </div>
        <div class="advantagess">
          <div id="advantage">
              < Advantages />
          </div>
        </div>
        <div class="detailsss">
          <div id="pc">
            < Details />
          </div>
        </div>
        <div class="footer">
          <div id="footer">
            < Footer />
          </div>
        </div>
      </div>
    </div>
        )
    }
}