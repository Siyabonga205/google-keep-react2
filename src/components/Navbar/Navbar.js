import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXElEQVR4nO3YwQkAMQgEQDt3O8+VoScz4F8JwsYqACZ0dy5UJXkXqqYbMEiuvkhfWXYAoMT4N52tcjY0ZkETBokYDwBH9YLjmmt8pN+Mx/Wc/4/0gkV1jQeov/oAgJ8unXRPB6gAAAAASUVORK5CYII="
            alt=""
            className="menu"
          />
          <span className="tooltip-text">Main Menu</span>
        </div>

        <img
          className="gb_uc gb_7d"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area">
        <div className="tooltip">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZ0lEQVR4nO1Zy04UURC9LNStG4WILtRPcOHbXzBRMCIzt7qr2q4azIQENRIT0R34AyaulIUJIS5UjGsFN77+wI1bcYUBRQYx1XN7wAfIMLcbmMxJOtPJzJy6p2+9brUxLbSw9QDQ1xGgIJCMWpIPQPzFovzQC1CmAfl99btSSETtZqvBYnwGkCcAeQFIltZ1IS9YlGdBJKc3e/3GxvFhIH6xYoEVIHlVxHigEMZHCyJ74zjeoZfeQyTHgOSqRZ50v03+Z4mfh2Hp0KaIAOReQP6aLARl1iIPh2F5z3r/nwgjHgHiuaoYmbER95g8AcRDyy4iY9Zy50a5eqNovyUeX7Grt0weAOI7zuBPvTfGtPngtcj9FnkxFzGg7pS4Ei/aiLt88wdU6q6JQbloMgvsWkyUbmS34zKYxkwhig5mYMBlJ5Qxky3aajGDPOG/TiS+y3NBUDrglfxf9ix3aiYEkqViGJ/yRpwUu2psDHsj/Z/NJDWLPrynfgihr8NV7Eo9daJRVOuMVLS90fuGCSFkck/mpZcV1mObZCpxLxLwQTaakGE8YHKGRb7mMtiDxsmSLlaWtHcyOSO4XDrhYvNtw2TaiitZnvGRgojaXVP5uWEyIJlXsu7u7p0mZ5TL5V1uR743hxCSmaZwLUD56C3Y9VBkcgYQn3Td8FRTpF9Avt8wmRsmaMBNmpxhUV6r7YDic3781LUoXlqFOlsUUNvQv9sLqU47XJsy4oVwfTbvuhoy7o20iPFxlwa/5d3GQ1Q64pW81spXn5CXc/oaB6vHLu0+8c6ux04tTC4dDpqMYFFuOhHTiFf2ZWMk4p50+KCDAu/8IV9Ihw/FiM+aLKGjmlSM2xkfbtamO5GKSD6Re03WSMWkMaNDto1yafKoxcTvVyUguWSyhs6dlmNGx548Uk+d0d9qitVMmDaGK+fBqRibxxhVE0CazWqGkSe1tdBDkRZT7Zr10vvkoIRy3R1hlxeNMqaBrTuwaWIUOrLRaUddrxVI5i3yoz+b0dXEQFaTx9XcRQcFgPwQSN4lL3eSBcssoHwClDeAfE8XtdaxwGXHzRXjC5re4e8drlgqFUyziIE8UrNvBM0kxkbc1fRigjyKZhZirL7qbonZFgmAh8x2BKCcT93Motw22xlWE0Ber7NbaMEk+AVGBt11l4dEfQAAAABJRU5ErkJggg=="
            alt=""
            className="search"
          />
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEL0lEQVR4nO1aS4scVRS+oDFCdEiMUReC7nyAGv0DboJi8JFFWpPprnuqzinqnOpQifgHso4Zo8EQd+rGrY84gvoDREQiKiaTUUYYo6BGQd1oDEk41Z3Yfau6e6q7qqda8sGFpqm+VV+f13fOLWOu4X+K+Tje4oX8DJActigfWOIlQP4dSP7RZVF+0+8s8aIlfhEw3tVsJnOmDkiSZCMgNwH5QyC5ACSXCi3kfy3Kxx5Fz+leZgiUuCX+BZB/tihPl0IAAG70MHrBEv9Y+OEHkpKfAKNkECHnXmcnJmEDeQJQviuNQJbQihfEOzJ/nnPdRFYA5OPDH4RPWuQFG/JuS/GDGjdRFG1oNBo36Gf9zgb8LJC8BMhfDtnroiV5rdc6pRAhotsB+fMBD/+HRTmEKPcU3dej+L6UOMmfAwh9AtC+oxQiAHw3IH/rbmRRzmuGAjiw2UyIvVF0K6Ac0eDP3IdkuRmGd05EpGuJLAmSb9RNTMnw/egRi3I6J7tlnqFoTOS509utVmuTqQjNZjJnUU6MSgprJ5IX2MivNxqN60zFePTgwest8lsTE0lTbI4lqiLhE++0JN8XSdNrrdZnHEucQcSbTUWwxKtF640ZBa3YbnaqIrB7ASg/lEokSZKNruxQgWcqRlctrJRGJBWATrEro05MHUD8keNWh8ysYT6Ot7hSfBzZse4AjHc5bnXSzCIs8kK/W/GCmUVY4sU+IiHvNrMIS7LcS8T3owfMLAKIz/USIaJbTA3hE+/UVleX1p/MBd1px1Ui2tWZGsL2ajKUlZkkkqgO7E9If490Lc/bt9XUDHu1k+wTs/Jr5iJX8dYx2IOAH3KUx+mZTL+2M4HpJXIic1E6SKh5QbTEL4/Ugt25bS+RL0zNAMRf98VxKE9mL4IDmzPz2yi619QEQcD3uw3fwCF4dxg91aZqbC1IvDjwYp9k3m2sVN6bdYbn7dsKyH85qXfPqIJztm5BDySvONZYHVmwIZDnXV/U/G3WCR7Kw5lRKkbJyB92BxBL0xwHDUKr1doEyKf6rSHLow6FrsIL5XF3amGJ35nGlLF32gjE7znPcTHv7GQoLPKxLBl5Y1ojU0B+M3N/5KOFN0tdDPmzzEwJ5d1Gu31TJQyMMbp3jiV0fTq2Im+J3OZ2jlfEGoTt7VUEtnXjsxujQZBsm2hzPejJI5NmEpQjZXSSaZ3QFIvZg55OomnfZcpAapk8N+vEjR6bHVYJUXRf/U1asd1iR/+508SWyJ/Sy6sDbniF1FdqJZ/ihtYetZb6ta70Xw/b21WKd1RsvwB0s5NFPlppl2oxfizX1UpalnipcIodF10ps3+c44AhBFaHvTBQKdT0Kt703ZPcQF3LKxzamaLsqc2wo9lM5nyKnuq8MMPvd05n04FG+lJN+hn5lLan2tlpU7QesucazJRwGYnLXuvgn+urAAAAAElFTkSuQmCC"
            alt=""
            className="refresh"
          />
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAATUlEQVR4nO2SQQqAMBADU59Z+5fJz5WCgleRitIM5JLDBpaRwicAFqD1SCojBprt7ch69pfudt4dkFT6YaAOedH/IRY5Fj0lFjkWzc0OGHwvlNAl8ZgAAAAASUVORK5CYII="
            alt=""
            className="list"
          />
          <span className="tooltip-text">List View</span>
        </div>
        <div className="tooltip">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfklEQVR4nO1ZzYscVRB/foBKNPiFFw8qGkEFEQKag8kK7uy6kGVX2CHOdPermao3XW9G17BqvCiMIoLgRS+CwUPwpiFLooccRND1YHJR/wA9eIiKXxcxBHG3pXpnN7OT7e73Zoa1D/uDgoHprvnVe1X16v1GqV3sYhdjAcDRm4HsV5r4h1xD/rbR4H2qbIia7Qkgm7iYJl5SZUNE8RHXAID4LVU2ANnnnQNAPqHKBiB+0zmF0J5VZYMm+4FHCn2zk8QMkH07Mub+rGdCY+7RZL/zSKE/wbT3Z/qz9g6N9nWN/G61Wr1mBPL8KJBdW992XgWyy2DsgY3vo+jZ22TlNdp/3Fd/09YA+VMdx/duEqfOfYD8HhBf3HguQu4My/8qIHtu+xzmFWmFmvjnIYgP1sPfGu2rgPZkb5EGv/+jFse3e7OPyIIvmQhtsgBxMhu1kpnQJFP1dZPPh8NWUgVOn/EOFPl9L/KIeJMmvuBOnJN5HSeVwCSVerHNRbFXIBp5NWzGjzkHIAeNq/NnGpxM1VtOxPtN3jnSYI9dsOe73e7VheSlkDTyJRenkhK+xAdtAWL3IJpMLqt/xsWZrN6o5Cs9k110SiXiX+vt9i2Z5LXpPOTiKMTh0ibLpgOT+nTbCX45M4DFxcXrNPLXRU7mpGDHRL7Ss/mo5UL+d03th3NTaKLbvRaIXwOy/2a1yqJuM1mjk9OBOVgJwz2p1fFQpWZO5QYRmCTM70Sfa813Kq/5Hu2Pg46k6PLJt45m+azUzAu+Ba3XG8qLcrCqoW5ZaE/3O5QDKW/li3xO1mg56/3ZaGsAcoMD03lEjQLdZN3vdCYnfSZr8ePFAbQmst6fCbbWgSb+WI0KQHus3+lUXv6H4Z4ifxPVzo1Z708FZjCFvhw5AI380pYAcnJYyBX5eyoI9mYGUB/sRPzFyAEA2mhrCuX1fzxU5O/JgJ7ITKHwih34aCTyMsZqtJ/0O5VJMzOAmjlV5LNSo9NZ7x8ePAvQfh9R+4GhyDcont1u3i9qo9Iqs8mbY75tFJD/apCtOxMPgsW9Mn9nHSiOB9lymiq9gyz9nLPylY2DLGec0MQfVqtLN+SSR+zctd3htROjxJx2GCXQnpdxx7nn5+2CDGDjIj9dbyWh4wWn2eQHMwMAgOulcFwcyQi80+M0EJ8prAHA9rybM4eCdrAF17sA8iW5bBUGkAZB/JlrEHKxGSadpn2vlOShp0rv9dF6pCaedi3sQAo29rjAWJFWfpHuqHwgqpj76qybzPOXZZVWOtuIyWeZNCVdfIjD5e4TKV/I3RPQ/rZNLq6KCAXEr4go5U3mSnI/pSIZ8krGM+eGugsIAGPbl4MXRfbrLySRBXujRio/+pikqCZ7nIhu3fw9Yw+IfNmn0K2JvKmGhQirQPYduWKK4JoZqGnvTwVbV/IiBAPfneVPhGQRlJ1klHFBJHOPAI6rskGjPevREt9QZQMgn3DfAX5OlQ3goac2qF1VZYMmXnIOwNiDqmxoNHif/Int8Ef3isg1/zffXagx4T8nNCRhFk3/kAAAAABJRU5ErkJggg=="
            alt=""
            className="settings"
          />
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3WQQrCMBCF4RxE1x5KSEOmkPFoLYIXU1EvUBnbjWhtKGhE/w+yKm8WSROecwCAdwphs/SStl700q+0i1FX35CZdBsa9VCJdncrpqN9K5nJYjvyMHRYXlJbMpPFjnJscCXpXDKT5dVgH/VUMpPFLtL4zmhTMpPFXgG7SE+Odb+u60XJTLbheWvtX+yXNlNDP5UB8A8CZU4pc24uypxQ5jrKXKDMASgqUOaUMufmoswJZa6jzAXKHAD8siuLwDCBLGPrPAAAAABJRU5ErkJggg=="
            alt=""
            className="apps"
          />
          <span className="tooltip-text"> Google Apps</span>
        </div>
        <div className="tooltip logout">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVR4nN2Uu05CQRCGUSONFD6EtZeXMHYSvL6FhZf2+8+pVOw0MfSGghcCRH0FFS1UIphJluTksMtZLJlkks3uP/d/p1SaawHKko6AJtABPp123N2hYf7lPEmSPUnPkkbTFHgCatGOW63WEnDjcTSU1DV153ywOrAY0xaf8w6wPsakabrhguVx1zFtyWf2aw7zWLvzVQJUQ5mXrZ++7EsBCVTx4h28sSUwyO4sAUyTJDnwVdAMsGToaxGwGRi22TxEZyNXRTaIc/44hbqTbQX6BXwfFtA0i+37Kvgo+lSK1/dZWzSaUduxQ36VdO/20Vq9Xl8xtTNwbG/AW9SQbXFlAF+SzoHKBHDSrgJcOJux/X7RR7stcpwX4M7Z9hqNxnIIVHMZ/ADbXpDfbkfSwH2y3alg24oukwGggg25IOlE0rdL7DImm0XbillGSDpN03QLWDV15zP3NsZdRa3rTKCq9TOCkr3CtoTEhmWLy2jnsrXPaNq2O2NLcKBzI3/Zeolw3gFyNgAAAABJRU5ErkJggg=="
            alt=""
            className="account"
          />
          <span className="tooltip-text">Logout</span>
          <span className="auth-user"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;