
let nextId = 1

const services = [] // Lista de servicios

const REQUIRED_FIELDS = ['name', 'description', 'duration', 'price', ' category', 'available'] // servicios requeridos en cuerpo de soliitud

function getServices() {
    return services
}

function getServiceById(id) {
    const service = services.find( s => s.id === id)
    if (!service) return null
    return service
}

function addService(serviceData) {
    for (const field of REQUIRED_FIELDS) {
        if (serviceData[field] === undefined || serviceData[field] === null) {
            return { error : `Falta el campo ${field}`}
        }
    }

    const newService = {
        id: nextId++,
        ...serviceData
    }

    services.push(newService)
  return newService
}

function updateService (id, updatedData) {
    const index = services.findIndex(s => s.id === id)
    if (index === -1) return null

    // ignora si alguien intenta cambiar el id
    const { id: _ignoredId, ...safeData } = updatedData

    services[index] = { ...services[index], ...safeData }
    return services[index]
}

function deleteService(id) {
    const index = services.findIndex(s => s.id === id)
    if (index === -1) return null

    const deleted = services.splice(index, 1)
    return deleted[0]
}

export { getServices, getServiceById, addService, updateService, deleteService }