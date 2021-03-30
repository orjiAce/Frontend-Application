import React, {useState, useEffect, useCallback} from 'react';
import styles from '../../styles/Products.module.scss'
import PropTypes, {object} from 'prop-types';
import {getProduct} from "../../redux/actions/data-action";
import {connect} from "react-redux";
import {FaBriefcase, FaBuilding, FaUser} from "react-icons/all";


const Products = (props) => {

    const [tabSwitch, setTabSwitch] = useState(false);

    const {getProduct} = props
    // const {data: {picture, name}} = props.data
    const {loading, data} = props.data

    const getProductDetails = useCallback(() => {
        getProduct()
    }, [])

    useEffect(() => {
        getProductDetails()

        console.log(props.data)
    }, [])

    /*    const {picture, name} = data*/
    return (
        <div className={styles.productPage}>
            <div className={styles.centerBox}>
                <section className={styles.productImage}>

                    {
                        loading ? <div>Loading...</div> : data && <img src={data.picture} alt='product'/>
                    }

                </section>
                <section className={styles.productMainInfo}>
                    {
                        loading ? <div>Loading...</div> :
                            data && <div className={styles.type}><span>Title:</span> {data.name}</div>
                    }
                    {
                        loading ? <div>Loading...</div> :
                            data && <div className={styles.type}><span>Type:</span> {data.type.name}</div>
                    }
                </section>
                <section className={styles.tabs}>
                    <div className={styles.tabBtnWrap}>
                        <button className={ !tabSwitch && `${styles.active}` } onClick={() => setTabSwitch(prevState => !prevState)} disabled={!tabSwitch}>
                            Description
                        </button>
                        <button className={ tabSwitch && `${styles.active}` } onClick={() => setTabSwitch(prevState => !prevState)} disabled={tabSwitch}>
Attributes
                        </button>

                    </div>

                    <div className={styles.tabContent}>
                        {
                            !tabSwitch ? <div className={styles.Description}>

                                <ul>
                                    <span>Category</span>
                                    {
                                    loading ? <div>Loading...</div> :
                                        data &&
                                        data.categories.map(cat =>(
                                            <li>
                                                {
                                                    cat.name
                                                }
                                            </li>
                                        ))
                                    }

                                </ul>

                            </div> :
                                <div className={styles.Attributes}>
                                    Attributes
                                </div>
                        }
                    </div>
                </section>
            </div>
            <div className={styles.rightBox}>
                <section className={styles.userInfo}>
                    <div className={styles.userImage}>

                        {
                            loading ? <div>Loading...</div> :
                                data && <img src={data.user.profilePicture} alt='user'/>
                        }
                    </div>
                    <div className={styles.username}>
                        {
                            loading ? <div>Loading...</div> :
                                data && <div className=''><FaUser/> {data.user.firstName} {data.user.lastName}</div>
                        }
                    </div>
                    <div className={styles.company}>

                        {
                            loading ? <div>Loading...</div> :
                                data && <div className=''><FaBuilding/> {data.company.name}</div>
                        }
                    </div>
                    <span className={styles.userPosition}>
                        {
                            loading ? <div>Loading...</div> :
                                data && <div className=''><FaBriefcase/> {data.user.position}</div>
                        }
                    </span>
                </section>
                <section className={styles.maps}>

                </section>

            </div>
        </div>
    );
};

Products.propTypes = {
    getProduct: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapActionsToDispatch = {
    getProduct
}

const mapStateToProps = (state) => ({
    data: state.data
})


export default connect(mapStateToProps, mapActionsToDispatch)(Products);
