import {
  AdministratorAdded as AdministratorAddedEvent,
  AdministratorRemoved as AdministratorRemovedEvent,
  Approval as ApprovalEvent,
  AuthorizationCanceled as AuthorizationCanceledEvent,
  AuthorizationUsed as AuthorizationUsedEvent,
  BoardResolutionDocumentSet as BoardResolutionDocumentSetEvent,
  Burn as BurnEvent,
  Mint as MintEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PriceOracleChanged as PriceOracleChangedEvent,
  ProcessorChanged as ProcessorChangedEvent,
  RealmAdministratorAdded as RealmAdministratorAddedEvent,
  RealmAdministratorRemoved as RealmAdministratorRemovedEvent,
  RealmChanged as RealmChangedEvent,
  RulesChanged as RulesChangedEvent,
  Seize as SeizeEvent,
  SeizerAdded as SeizerAddedEvent,
  SeizerRemoved as SeizerRemovedEvent,
  SupplierAdded as SupplierAddedEvent,
  SupplierRemoved as SupplierRemovedEvent,
  TokenizedShares as TokenizedSharesEvent,
  Transfer as TransferEvent,
  TrustedIntermediariesChanged as TrustedIntermediariesChangedEvent
} from "../generated/ShareBridgeToken/ShareBridgeToken"
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
} from "../generated/schema"

export function handleAdministratorAdded(event: AdministratorAddedEvent): void {
  let entity = new AdministratorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.administrator = event.params.administrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdministratorRemoved(
  event: AdministratorRemovedEvent
): void {
  let entity = new AdministratorRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.administrator = event.params.administrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorizationCanceled(
  event: AuthorizationCanceledEvent
): void {
  let entity = new AuthorizationCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.authorizer = event.params.authorizer
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorizationUsed(event: AuthorizationUsedEvent): void {
  let entity = new AuthorizationUsed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.authorizer = event.params.authorizer
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBoardResolutionDocumentSet(
  event: BoardResolutionDocumentSetEvent
): void {
  let entity = new BoardResolutionDocumentSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.boardResolutionDocumentHash = event.params.boardResolutionDocumentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePriceOracleChanged(event: PriceOracleChangedEvent): void {
  let entity = new PriceOracleChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newPriceOracle = event.params.newPriceOracle

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessorChanged(event: ProcessorChangedEvent): void {
  let entity = new ProcessorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newProcessor = event.params.newProcessor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRealmAdministratorAdded(
  event: RealmAdministratorAddedEvent
): void {
  let entity = new RealmAdministratorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.administrator = event.params.administrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRealmAdministratorRemoved(
  event: RealmAdministratorRemovedEvent
): void {
  let entity = new RealmAdministratorRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.administrator = event.params.administrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRealmChanged(event: RealmChangedEvent): void {
  let entity = new RealmChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRealm = event.params.newRealm

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRulesChanged(event: RulesChangedEvent): void {
  let entity = new RulesChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRules = event.params.newRules
  entity.newRulesParams = event.params.newRulesParams

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeize(event: SeizeEvent): void {
  let entity = new Seize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeizerAdded(event: SeizerAddedEvent): void {
  let entity = new SeizerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seizer = event.params.seizer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeizerRemoved(event: SeizerRemovedEvent): void {
  let entity = new SeizerRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seizer = event.params.seizer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupplierAdded(event: SupplierAddedEvent): void {
  let entity = new SupplierAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.supplier = event.params.supplier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupplierRemoved(event: SupplierRemovedEvent): void {
  let entity = new SupplierRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.supplier = event.params.supplier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenizedShares(event: TokenizedSharesEvent): void {
  let entity = new TokenizedShares(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenizedShares = event.params.tokenizedShares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrustedIntermediariesChanged(
  event: TrustedIntermediariesChangedEvent
): void {
  let entity = new TrustedIntermediariesChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newTrustedIntermediaries = event.params.newTrustedIntermediaries

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
