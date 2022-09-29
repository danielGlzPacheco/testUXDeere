import React from 'react';

export default function CardCutterMX10() {
  return (
    <div className="card py-3 px-4">
      <h1 className="mb-3">MX10 Medium-Duty Rotary Cutter</h1>
      <div className="row">
        <div className="col-md-12">
          <img
            className="uxf-product-image img-fluid pt-1"
            alt="Rotary Cutter in action"
            src="https://www.deere.com/assets/images/region-4/products/cutters-shredders/rotary-cutters/rotary-landingpage/heavy-duty-525726.jpg"
          />
        </div>
        <div className="col-md-12">
          <ul className="uxf-ul pt-3 mb-0 mt-2 mt-md-0 pb-3">
            <li className="mb-3">
              Industry-exclusive Double-Decker™ frame design
            </li>
            <li className="mb-3">Standard stump jumper blade holder</li>
            <li className="mb-3">5-year limited gearbox warranty</li>
            <li>Front & rear safety chain shields</li>
          </ul>
          <button
            className="btn btn-primary mt-2 ml-0 ml-md-3 mb-3"
            type="button"
          >
            Build
          </button>
        </div>
      </div>
      <div className="row h-100">
        <div className="col-md-24">
          <h2 className="h3 pt-2 pt-md-4 mt-2">Description</h2>
          <p>
            John Deere rotary cutters lead the way with innovative design,
            superior performance, and proven durability. Valuable features are
            included such as the Double-Decker™ design and Max Flow cutting
            chamber, which prevent water and debris from accumulating on the
            smooth, dome-shaped top deck while the flat bottom deck absorbs the
            punishment from rocks and stumps.
          </p>
          <p>
            The top deck stays smooth - no dents, no dings, no holes. The
            internal supports sandwiched between the top and bottom decks are
            key to the smooth and structure-free Max Flow cutting chamber, while
            at the same time provide added strength and durability.
          </p>
          <img
            className="img-fluid"
            alt="MX10 Rotary Cutter"
            src="https://www.deere.com/assets/images/region-4/products/cutters-shredders/rotary-cutters/mx10/mx10_rotary_cutters_529727_large_eee29fffa672b4282392353a25abad1bff566d6b.jpg"
          />
          <p>
            To help promote safe operation, John Deere rotary cutters are
            equipped with front and rear safety-chain shields. John Deere rotary
            cutters continue to advance in value with larger, more powerful
            gearboxes, redesigned blade holders, and updated constant-velocity
            (CV) drivelines (special to the flex-wing models).
          </p>
          <p>
            The patented Double-Decker design provides strength and superior
            cutting performance while reducing top deck rust. Two welded decks,
            each 3-mm (1/8 in.) thick, form the upper and lower surfaces of the
            rotary cutter frame.
          </p>
          <p>
            Internal stiffeners are sandwiched between the two decks, providing
            superior strength and rigidity.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-24">
          <div className="table-responsive">
            <h2 className="h3 mb-3 mt-3">Specifications</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">Cutting width</th>
                  <td>
                    3,200 mm <br />
                    126 in.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cutting height</th>
                  <td>
                    25 to 305 mm <br />1 to 12 in.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cutting capacity</th>
                  <td>
                    50 mm <br />2 in.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cutting chamber Depth</th>
                  <td>
                    216 mm <br />
                    8.5 in.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
