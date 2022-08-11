import React from 'react'

const Sidebar = () => {
  return (
    <div className="page-body-wrapper">
        <div className="sidebar-wrapper">
          <div>
            <div className="logo-wrapper"><a href="index.html"><img className="img-fluid for-light" src="../assets/images/logo/logo.png" alt=""/><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt=""/></a>
              <div className="back-btn"><i className="fa fa-angle-left"></i></div>
              <div className="toggle-sidebar"><i className="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
            </div>
            <div className="logo-icon-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo-icon.png" alt=""/></a></div>
            <nav className="sidebar-main">
              <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
              <div id="sidebar-menu">
                <ul className="sidebar-links" id="simple-bar">
                  <li className="back-btn"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo-icon.png" alt=""/></a>
                    <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                  </li>
                  <li className="sidebar-main-title">
                    <div>
                      <h6 className="lan-1">General</h6>
                      <p className="lan-2">Dashboards,widgets & layout.</p>
                    </div>
                  </li>
                  <li className="sidebar-list">
                    <label className="badge badge-success">2</label><a className="sidebar-link sidebar-title" href="#"><i data-feather="home"></i><span className="lan-3">Dashboard              </span></a>
                    <ul className="sidebar-submenu">
                      <li><a className="lan-4" href="index.html">Default</a></li>
                      <li><a className="lan-5" href="dashboard-02.html">Ecommerce</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"><a className="sidebar-link sidebar-title" href="#"><i data-feather="airplay"></i><span className="lan-6">Widgets</span></a>
                    <ul className="sidebar-submenu">
                      <li><a href="general-widget.html">General</a></li>
                      <li><a href="chart-widget.html">Chart</a></li>
                    </ul>
                  </li>
                  <li className="sidebar-list"><a className="sidebar-link sidebar-title" href="#"><i data-feather="layout"></i><span className="lan-7">Page layout</span></a>
                    <ul className="sidebar-submenu">
                      <li><a href="box-layout.html">Boxed</a></li>
                      <li><a href="layout-rtl.html">RTL</a></li>
                      <li><a href="layout-dark.html">Dark Layout</a></li>
                      <li><a href="hide-on-scroll.html">Hide Nav Scroll</a></li>
                      <li><a href="footer-light.html">Footer Light</a></li>
                      <li><a href="footer-dark.html">Footer Dark</a></li>
                      <li><a href="footer-fixed.html">Footer Fixed</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
      </div>
      </div>
  )
}

export default Sidebar