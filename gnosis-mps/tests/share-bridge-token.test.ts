import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AdministratorAdded } from "../generated/schema"
import { AdministratorAdded as AdministratorAddedEvent } from "../generated/ShareBridgeToken/ShareBridgeToken"
import { handleAdministratorAdded } from "../src/share-bridge-token"
import { createAdministratorAddedEvent } from "./share-bridge-token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let administrator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAdministratorAddedEvent =
      createAdministratorAddedEvent(administrator)
    handleAdministratorAdded(newAdministratorAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdministratorAdded created and stored", () => {
    assert.entityCount("AdministratorAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdministratorAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "administrator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
