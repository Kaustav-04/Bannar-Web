import { Fragment, useEffect, useRef, useState } from "react"
import Banners from "../components/Banners/Banners"
import NewBanner from "../components/Banners/NewBanner"
import Header from "../components/Layout/Header"
import Layout from "../components/Layout/Layout"
import { useReactToPrint } from "react-to-print"

function MainNavigation() {
    const [formActive, setFormActive] = useState(false);
    const [List, setList] = useState({});
    const addNewBanner = (event) => {
        event.preventDefault();
        setFormActive(true);
    }
    const closeFormEvent = (event) => {
        event.preventDefault();
        setFormActive(false);
    }
    const componentRef = useRef();
    const printHandler = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Banner'
    })

    const fetchData = async() => {

        const Response = await fetch("https://banner-generator-soham8455.herokuapp.com/api/dataofsqlalchemy",{
            mode: 'no-cors',
            method: 'GET'
        });
        const data = await Response.json();
        let eventList = data.event
        const list = eventList.slice(-1);
        setList(list);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <Fragment>
            <Header click={addNewBanner} onPrint={printHandler} />
            <Layout>
                {formActive && <NewBanner closeForm={closeFormEvent} />}
                {!formActive && <Banners details={List} ref={componentRef} />}
                <button onClick={fetchData}>click</button>
            </Layout>
        </Fragment>
    )
}

export default MainNavigation