import React from 'react';
import flag from "../../assets/gifs/nic/flag_of_Sri_Lanka.gif";

export default function CallerId() {
  return (
    <section className="text-gray-800" id="callerId">
      <div className="container mx-auto text-center lg:px-40">
        <img
          className="object-cover object-center rounded mx-auto w-20"
          alt="flag"
          src={flag}
        />
        <div className="mx-auto mt-5 bg-gray-800 bg-opacity-5 p-10 pb-5 rounded">
          <p className="leading-relaxed mb-5">
            The National Identity Card (abbreviation: NIC) is the identity document in use in Sri Lanka. It is
            compulsory for all Sri Lankan citizens who are fifteen years of age and older to have their NICs. NICs are
            issued by the Department for Registration of Persons.
          </p>
          <form className="w-full">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                       htmlFor="grid-nic-number">
                  Please input your old / new NIC Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-nic-number" type="number" placeholder="NIC number"
                  onChange={e => this.setState({nic_nu: e.target.value})}/>
                <p id={"example"} className="text-gray-500 text-xs italic">ex: 123456789 / 1234567890</p>
                <p id={"warning"} className="text-red-500 text-xs italic"/>
              </div>
              <div className="w-full md:w-1/2 px-3 py-7 md:mb-0">
                <button
                  className="text-lg bg-gray-800 hover:bg-gray-700 text-white py-1 px-2 rounded font-bold duration-0.2 w-full sticky z-10"
                  type="button"
                >
                  🔍 Get info
                </button>
              </div>
              <div className="w-full px-3 py-7 md:mb-0">
                <p id={"gender"} className="text-gray-800 text-xl italic font-bold"/>
                <p id={"birthday"} className="text-gray-800 text-xl italic font-bold"/>
              </div>
            </div>
          </form>
        </div>
        <div className="mx-auto mt-5 mb-5 bg-gray-800 bg-opacity-5 p-10 pb-5 rounded">
          <p className="leading-relaxed mb-5">
            You can find date of birth and other information from your national identity card (NIC) number. Date of
            birth,
            gender (sex) and voter eligibility are found in every Sri Lanka’s NIC. Every old NIC number has 9 numeric
            characters and an alphabetic character.
            <br/><br/>
            New NIC number has 12 digits only. Example for old NIC no is 123456789V. First two digits (12) represent
            year of birth, and following three digits (345) represent month and date of birth. Also those three digits
            (345) represent gender. If those numbers are below 500, NIC holder is male. If it is above 500, NIC holder
            is female. The last alphabetic character indicates voter eligibility. If it is V, it means ‘voter’. If it
            is X, it means the NIC holder is not eligible to vote.
            <br/><br/>
            New NIC number has slight different. Eg: 123456789012. Here, first four digits are year of birth, and
            following three digits (567) are month and date of birth as well as gender.
          </p>
        </div>
      </div>
    </section>
  )
}