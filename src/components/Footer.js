import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.classList = " bg-primary"
    footer.innerHTML = `
      <div class="footer-top">
          <ul class="footer-ul">
              <li class="footer-li">About Shoppy</li>
              <li class="footer-li">Announcements</li>
              <li class="footer-li">Community</li>
              <li class="footer-li">Security </li>
              <li class="footer-li">CentreSeller </li>
              <li class="footer-li">centrePolicies</li>
              <li class="footer-li">Help & contact</li>
              <li class="footer-li">Site Map</li>
          </ul>
      </div>
      <div class="footer-bottom">
        <p>Copyright © 2024 Shoppy Inc. All Rights Reserved.
          <a href="#" style="color:#ffffff">User Agreement</a>,
          <a href="#" style="color:#ffffff">Privacy</a>,
          <a href="#" style="color:#ffffff">Privacy</a>,
          <a href="#" style="color:#ffffff">Payments Terms of Use</a>,
          <a href="#" style="color:#ffffff">Cookies</a> and
          <a href="#" style="color:#ffffff">AdChoice</a>
        </p>
      </div>
    `

    return footer
  }
}