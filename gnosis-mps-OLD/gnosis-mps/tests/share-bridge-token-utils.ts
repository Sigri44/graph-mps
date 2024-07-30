import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdministratorAdded,
  AdministratorRemoved,
  Approval,
  AuthorizationCanceled,
  AuthorizationUsed,
  BoardResolutionDocumentSet,
  Burn,
  Mint,
  OwnershipTransferred,
  PriceOracleChanged,
  ProcessorChanged,
  RealmAdministratorAdded,
  RealmAdministratorRemoved,
  RealmChanged,
  RulesChanged,
  Seize,
  SeizerAdded,
  SeizerRemoved,
  SupplierAdded,
  SupplierRemoved,
  TokenizedShares,
  Transfer,
  TrustedIntermediariesChanged
} from "../generated/ShareBridgeToken/ShareBridgeToken"

export function createAdministratorAddedEvent(
  administrator: Address
): AdministratorAdded {
  let administratorAddedEvent = changetype<AdministratorAdded>(newMockEvent())

  administratorAddedEvent.parameters = new Array()

  administratorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "administrator",
      ethereum.Value.fromAddress(administrator)
    )
  )

  return administratorAddedEvent
}

export function createAdministratorRemovedEvent(
  administrator: Address
): AdministratorRemoved {
  let administratorRemovedEvent = changetype<AdministratorRemoved>(
    newMockEvent()
  )

  administratorRemovedEvent.parameters = new Array()

  administratorRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "administrator",
      ethereum.Value.fromAddress(administrator)
    )
  )

  return administratorRemovedEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createAuthorizationCanceledEvent(
  authorizer: Address,
  nonce: Bytes
): AuthorizationCanceled {
  let authorizationCanceledEvent = changetype<AuthorizationCanceled>(
    newMockEvent()
  )

  authorizationCanceledEvent.parameters = new Array()

  authorizationCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "authorizer",
      ethereum.Value.fromAddress(authorizer)
    )
  )
  authorizationCanceledEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromFixedBytes(nonce))
  )

  return authorizationCanceledEvent
}

export function createAuthorizationUsedEvent(
  authorizer: Address,
  nonce: Bytes
): AuthorizationUsed {
  let authorizationUsedEvent = changetype<AuthorizationUsed>(newMockEvent())

  authorizationUsedEvent.parameters = new Array()

  authorizationUsedEvent.parameters.push(
    new ethereum.EventParam(
      "authorizer",
      ethereum.Value.fromAddress(authorizer)
    )
  )
  authorizationUsedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromFixedBytes(nonce))
  )

  return authorizationUsedEvent
}

export function createBoardResolutionDocumentSetEvent(
  boardResolutionDocumentHash: Bytes
): BoardResolutionDocumentSet {
  let boardResolutionDocumentSetEvent = changetype<BoardResolutionDocumentSet>(
    newMockEvent()
  )

  boardResolutionDocumentSetEvent.parameters = new Array()

  boardResolutionDocumentSetEvent.parameters.push(
    new ethereum.EventParam(
      "boardResolutionDocumentHash",
      ethereum.Value.fromFixedBytes(boardResolutionDocumentHash)
    )
  )

  return boardResolutionDocumentSetEvent
}

export function createBurnEvent(from: Address, amount: BigInt): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return burnEvent
}

export function createMintEvent(to: Address, amount: BigInt): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPriceOracleChangedEvent(
  newPriceOracle: Address
): PriceOracleChanged {
  let priceOracleChangedEvent = changetype<PriceOracleChanged>(newMockEvent())

  priceOracleChangedEvent.parameters = new Array()

  priceOracleChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newPriceOracle",
      ethereum.Value.fromAddress(newPriceOracle)
    )
  )

  return priceOracleChangedEvent
}

export function createProcessorChangedEvent(
  newProcessor: Address
): ProcessorChanged {
  let processorChangedEvent = changetype<ProcessorChanged>(newMockEvent())

  processorChangedEvent.parameters = new Array()

  processorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newProcessor",
      ethereum.Value.fromAddress(newProcessor)
    )
  )

  return processorChangedEvent
}

export function createRealmAdministratorAddedEvent(
  administrator: Address
): RealmAdministratorAdded {
  let realmAdministratorAddedEvent = changetype<RealmAdministratorAdded>(
    newMockEvent()
  )

  realmAdministratorAddedEvent.parameters = new Array()

  realmAdministratorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "administrator",
      ethereum.Value.fromAddress(administrator)
    )
  )

  return realmAdministratorAddedEvent
}

export function createRealmAdministratorRemovedEvent(
  administrator: Address
): RealmAdministratorRemoved {
  let realmAdministratorRemovedEvent = changetype<RealmAdministratorRemoved>(
    newMockEvent()
  )

  realmAdministratorRemovedEvent.parameters = new Array()

  realmAdministratorRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "administrator",
      ethereum.Value.fromAddress(administrator)
    )
  )

  return realmAdministratorRemovedEvent
}

export function createRealmChangedEvent(newRealm: Address): RealmChanged {
  let realmChangedEvent = changetype<RealmChanged>(newMockEvent())

  realmChangedEvent.parameters = new Array()

  realmChangedEvent.parameters.push(
    new ethereum.EventParam("newRealm", ethereum.Value.fromAddress(newRealm))
  )

  return realmChangedEvent
}

export function createRulesChangedEvent(
  newRules: Array<BigInt>,
  newRulesParams: Array<BigInt>
): RulesChanged {
  let rulesChangedEvent = changetype<RulesChanged>(newMockEvent())

  rulesChangedEvent.parameters = new Array()

  rulesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newRules",
      ethereum.Value.fromUnsignedBigIntArray(newRules)
    )
  )
  rulesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newRulesParams",
      ethereum.Value.fromUnsignedBigIntArray(newRulesParams)
    )
  )

  return rulesChangedEvent
}

export function createSeizeEvent(account: Address, amount: BigInt): Seize {
  let seizeEvent = changetype<Seize>(newMockEvent())

  seizeEvent.parameters = new Array()

  seizeEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  seizeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return seizeEvent
}

export function createSeizerAddedEvent(seizer: Address): SeizerAdded {
  let seizerAddedEvent = changetype<SeizerAdded>(newMockEvent())

  seizerAddedEvent.parameters = new Array()

  seizerAddedEvent.parameters.push(
    new ethereum.EventParam("seizer", ethereum.Value.fromAddress(seizer))
  )

  return seizerAddedEvent
}

export function createSeizerRemovedEvent(seizer: Address): SeizerRemoved {
  let seizerRemovedEvent = changetype<SeizerRemoved>(newMockEvent())

  seizerRemovedEvent.parameters = new Array()

  seizerRemovedEvent.parameters.push(
    new ethereum.EventParam("seizer", ethereum.Value.fromAddress(seizer))
  )

  return seizerRemovedEvent
}

export function createSupplierAddedEvent(supplier: Address): SupplierAdded {
  let supplierAddedEvent = changetype<SupplierAdded>(newMockEvent())

  supplierAddedEvent.parameters = new Array()

  supplierAddedEvent.parameters.push(
    new ethereum.EventParam("supplier", ethereum.Value.fromAddress(supplier))
  )

  return supplierAddedEvent
}

export function createSupplierRemovedEvent(supplier: Address): SupplierRemoved {
  let supplierRemovedEvent = changetype<SupplierRemoved>(newMockEvent())

  supplierRemovedEvent.parameters = new Array()

  supplierRemovedEvent.parameters.push(
    new ethereum.EventParam("supplier", ethereum.Value.fromAddress(supplier))
  )

  return supplierRemovedEvent
}

export function createTokenizedSharesEvent(
  tokenizedShares: BigInt
): TokenizedShares {
  let tokenizedSharesEvent = changetype<TokenizedShares>(newMockEvent())

  tokenizedSharesEvent.parameters = new Array()

  tokenizedSharesEvent.parameters.push(
    new ethereum.EventParam(
      "tokenizedShares",
      ethereum.Value.fromUnsignedBigInt(tokenizedShares)
    )
  )

  return tokenizedSharesEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createTrustedIntermediariesChangedEvent(
  newTrustedIntermediaries: Array<Address>
): TrustedIntermediariesChanged {
  let trustedIntermediariesChangedEvent =
    changetype<TrustedIntermediariesChanged>(newMockEvent())

  trustedIntermediariesChangedEvent.parameters = new Array()

  trustedIntermediariesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newTrustedIntermediaries",
      ethereum.Value.fromAddressArray(newTrustedIntermediaries)
    )
  )

  return trustedIntermediariesChangedEvent
}
