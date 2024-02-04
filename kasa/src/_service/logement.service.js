import logements from "@/Assets/data/logement.json";

const allLogements = () => {
    return logements;
}

const oneLogements = async (id) => {

    const oneLogements = await logements.find(item => item.id === id)

    return oneLogements;
}

export const logementService = {
    allLogements,
    oneLogements
}

export default logementService