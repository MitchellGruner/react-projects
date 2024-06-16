"use client";

// import Select from "../components/ui/Select";
import { useEffect, useState } from "react";
const BASE_URL = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
    "Tallinn",
    "Helsinki",
    "Stockhom",
    "Oslo",
    "Copenhagen",
    "Reykjavik",
] as const;
type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
    name: {
        common: string;
    };
    capital: string;
}

interface CountryCardProps {
    country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
    return (
        <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
        </div>
    )
}

const CountriesPage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [capital, setCapital] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const url = capital ? `${BASE_URL}/capital/${capital}` : `${BASE_URL}/all`;

            const data = await fetch(url);
            const parsedData = await data.json();
            setCountries(parsedData);
        }

        fetchData();
    }, [capital]);
    
    return (
        <div className="p-4">
            <div>
                {/* <Select onChange={(value: Capital) => setCapital(value)}>
                    {FILTERABLE_CAPITALS.map(capital => {
                        return (
                            <Select.Option key={capital} value={capital}>{capital}</Select.Option>
                        )
                    })}
                </Select> */}
            </div>
            {countries.map(country => {
                return (
                    <CountryCard key={country.name.common} country={country} />
                )
            })}
        </div>
    )
}

export default CountriesPage;